import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ComingSoonModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ComingSoonModal: React.FC<ComingSoonModalProps> = ({ isOpen, onClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-md z-[100] flex items-center justify-center cursor-pointer"
                    >
                        {/* Modal Content */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
                            className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 max-w-md w-full mx-4 shadow-[0_0_50px_rgba(16,185,129,0.1)] relative overflow-hidden"
                        >
                            {/* Ambient Glow */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-50" />
                            <div className="absolute -top-20 -right-20 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

                            <div className="text-center relative z-10">
                                {/* Icon */}
                                <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-emerald-500/20">
                                    <svg className="w-8 h-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-2 font-display">Coming Soon</h3>
                                <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                                    We're currently fine-tuning this feature for launch. Stay tuned for updates as we roll out new capabilities.
                                </p>

                                <button
                                    onClick={onClose}
                                    className="w-full py-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-medium text-xs uppercase tracking-widest hover:bg-emerald-500/20 transition-all duration-300"
                                >
                                    Got it
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default ComingSoonModal;
