"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { KeyRound, Mail, X, Check, Loader2 } from "lucide-react";

interface ForgotPasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ForgotPasswordModal({
  isOpen,
  onClose,
}: ForgotPasswordModalProps) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async () => {
    if (!email) return;

    setIsSubmitting(true);

    // Simula uma requisição para o servidor
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Fecha o modal após 3 segundos
    setTimeout(() => {
      handleClose();
    }, 3000);
  };

  const handleClose = () => {
    onClose();
    setEmail("");
    setIsSubmitted(false);
    setIsSubmitting(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !isSubmitting && email) {
      handleSubmit();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            className="relative w-full max-w-md"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <Card className="border-border/30 bg-card/95 shadow-2xl backdrop-blur-md">
              <CardContent className="p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2">
                    <KeyRound className="h-5 w-5 text-primary" />
                    <h3 className="text-lg font-semibold">
                      Esqueci minha senha
                    </h3>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleClose}
                    className="h-8 w-8 p-0"
                    disabled={isSubmitting}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>

                {/* Content */}
                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <motion.div
                      key="form"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-sm text-muted-foreground mb-6">
                        Digite seu email para receber as instruções de
                        recuperação de senha.
                      </p>

                      <div className="space-y-6">
                        <div className="space-y-2">
                          <Label
                            htmlFor="email"
                            className="text-sm font-medium"
                          >
                            Email
                          </Label>
                          <div className="relative">
                            <Input
                              id="email"
                              type="email"
                              placeholder="Digite seu email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              onKeyPress={handleKeyPress}
                              className="h-10 pl-10"
                              disabled={isSubmitting}
                            />
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          </div>
                        </div>

                        <div className="flex space-x-3">
                          <Button
                            type="button"
                            variant="outline"
                            onClick={handleClose}
                            className="flex-1"
                            disabled={isSubmitting}
                          >
                            Cancelar
                          </Button>
                          <Button
                            type="button"
                            onClick={handleSubmit}
                            className="flex-1"
                            disabled={isSubmitting || !email}
                          >
                            {isSubmitting ? (
                              <>
                                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                                Enviando...
                              </>
                            ) : (
                              "Enviar"
                            )}
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="text-center space-y-4"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center"
                      >
                        <Check className="h-8 w-8 text-green-600" />
                      </motion.div>

                      <div className="space-y-2">
                        <h4 className="text-lg font-medium">Email enviado!</h4>
                        <p className="text-sm text-muted-foreground">
                          Verifique sua caixa de entrada e siga as instruções
                          para redefinir sua senha.
                        </p>
                      </div>

                      <p className="text-xs text-muted-foreground">
                        Esta janela fechará automaticamente em alguns
                        segundos...
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
