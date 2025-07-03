// src/components/Chatbot.tsx
"use client";
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Chatbot.module.css';

// Define the structure for a single message
interface Message {
  text: string;
  sender: 'user' | 'bot';
}

// Define the suggested questions
const suggestedQuestions = [
    "What services do you offer?",
    "What are your prices?",
    "Are you available for my date?",
];

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { sender: 'bot', text: "Hi there! I'm here to help. You can ask me a question or select one of the options below." }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const toggleChat = () => setIsOpen(!isOpen);

  // --- UPDATED: More robust function to get bot responses ---
  const getBotResponse = (userInput: string): string => {
    const lowerCaseInput = userInput.toLowerCase();

    // Keyword arrays for better matching (handles typos and different phrasings)
    const serviceKeywords = ['service', 'servis', 'offer', 'what do you do', 'shoot', 'type'];
    const priceKeywords = ['price', 'pricing', 'package', 'cost', 'how much', 'rates'];
    const availabilityKeywords = ['available', 'availability', 'date', 'book'];
    const locationKeywords = ['location', 'based', 'where are you', 'travel'];
    const contactKeywords = ['contact', 'email', 'phone'];

    // Check if any keyword from an array is included in the user's input
    if (serviceKeywords.some(keyword => lowerCaseInput.includes(keyword))) {
      return "I specialize in several types of event photography, including Baby Bump/Gender Reveals, Half Saree Functions, and House Warming ceremonies. I also love doing street photography sessions!";
    }
    if (priceKeywords.some(keyword => lowerCaseInput.includes(keyword))) {
      return "That's a great question! Pricing varies depending on the type and length of the event. The best way to get an accurate quote is to send a detailed inquiry through the contact form or directly to deepdepicts@gmail.com.";
    }
    if (availabilityKeywords.some(keyword => lowerCaseInput.includes(keyword))) {
      return "To check my availability for your specific date, please use the contact form on this page or email me directly at deepdepicts@gmail.com with your event details.";
    }
    if (locationKeywords.some(keyword => lowerCaseInput.includes(keyword))) {
      return "I am based in Dallas, Texas, but I love to travel for events! Feel free to reach out about sessions outside of the Dallas area.";
    }
    if (contactKeywords.some(keyword => lowerCaseInput.includes(keyword))) {
      return "You can reach me directly by email at deepdepicts@gmail.com. I'd love to hear from you!";
    }

    // Default fallback response if no keywords match
    return "I'm sorry, I'm just a simple assistant and I don't have the answer to that yet. For any specific questions, please email my creator at deepdepicts@gmail.com.";
  };

  const processMessage = (messageText: string) => {
    setShowSuggestions(false); // Hide suggestions while processing
    const userMessage: Message = { text: messageText, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    setTimeout(() => {
      const botResponseText = getBotResponse(messageText);
      const botMessage: Message = { sender: 'bot', text: botResponseText };
      setMessages(prev => [...prev, botMessage]);
      setIsLoading(false);
      setShowSuggestions(true); 
    }, 1200);
  };

  const handleSuggestionClick = (question: string) => {
    processMessage(question);
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    processMessage(inputValue);
    setInputValue('');
  };

  return (
    <>
      <div className={styles.chatToggleButton} onClick={toggleChat}>
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.chatWindow}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <div className={styles.chatHeader}>
              <h3>Deep Depicts Assistant</h3>
              <button onClick={toggleChat} className={styles.closeButton}>&times;</button>
            </div>
            <div className={styles.chatMessages}>
              {messages.map((msg, index) => (
                <div key={index} className={`${styles.message} ${styles[msg.sender]}`}>
                  {msg.text}
                </div>
              ))}
              {isLoading && <div className={`${styles.message} ${styles.bot} ${styles.loading}`}><span></span><span></span><span></span></div>}
              {showSuggestions && !isLoading && (
                <div className={styles.suggestionsContainer}>
                    {suggestedQuestions.map((q, i) => (
                        <button key={i} className={styles.suggestionButton} onClick={() => handleSuggestionClick(q)}>
                            {q}
                        </button>
                    ))}
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
            <form className={styles.chatInputForm} onSubmit={handleSendMessage}>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Or type your own question..."
                aria-label="Your message"
              />
              <button type="submit" aria-label="Send message">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
