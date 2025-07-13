"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { motion } from "framer-motion";
import { Eye, EyeOff, KeyRound, User } from "lucide-react";
import ForgotPasswordModal from "../ForgotPasswordModal";

export default function LoginForm2() {
  const [showPassword, setShowPassword] = useState(false);
  const [stayConnected, setStayConnected] = useState(false);
  const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleForgotPassword = () => {
    setShowForgotPasswordModal(true);
  };

  const closeForgotPasswordModal = () => {
    setShowForgotPasswordModal(false);
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Overlay com gradiente laranja para transparente */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 via-orange-400/10 to-transparent pointer-events-none"></div>

      <div className="relative z-10 flex flex-col lg:flex-row min-h-screen items-center justify-center px-4 py-8 gap-8">
        {/* Logo - aparece em todas as telas, muda posição pelo flex */}
        <motion.div
          className="flex items-center justify-center max-w-md lg:mr-34"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-center"
          >
            <img
              src="/logo.png"
              alt="Logo"
              className="mx-auto max-h-32 w-auto object-contain drop-shadow-lg mb-6 lg:mb-0"
            />
          </motion.div>
        </motion.div>

        {/* Login Form */}
        <motion.div
          className="w-full max-w-sm"
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <Card className="border-border/30 bg-card/80 shadow-2xl backdrop-blur-xs">
            <CardContent className="space-y-5 p-6 sm:p-8">
              {/* Header */}
              <motion.div
                className="space-y-3 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
              >
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
                  Entrar
                </h2>
                <p className="text-sm text-muted-foreground">
                  Entre na sua conta para acessar a plataforma
                </p>
              </motion.div>

              {/* Usuario Input */}
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
              >
                <Label htmlFor="usuario" className="text-sm font-medium">
                  Usuário
                </Label>
                <div className="relative">
                  <Input
                    id="usuario"
                    type="text"
                    placeholder="Digite seu usuário"
                    className="h-10 pl-10"
                  />
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                </div>
              </motion.div>

              {/* Password Input */}
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
              >
                <Label htmlFor="password" className="text-sm font-medium">
                  Senha
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Digite sua senha"
                    className="h-10 pl-10 pr-10"
                  />
                  <KeyRound className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <button
                    type="button"
                    onClick={togglePassword}
                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </motion.div>

              {/* Stay Connected */}
              <motion.div
                className="flex items-center justify-between"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.65, ease: "easeOut" }}
              >
                <Label
                  htmlFor="stay-connected"
                  className="text-sm font-medium cursor-pointer"
                >
                  Manter conectado
                </Label>
                <Switch
                  id="stay-connected"
                  checked={stayConnected}
                  onCheckedChange={setStayConnected}
                />
              </motion.div>

              {/* Botão Entrar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.75, ease: "easeOut" }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button className="w-full h-10 font-medium">Entrar</Button>
              </motion.div>

              {/* Divider */}
              <motion.div
                className="relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.85, ease: "easeOut" }}
              >
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border/50"></div>
                </div>
              </motion.div>

              {/* Esqueci minha senha */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.95, ease: "easeOut" }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  variant="outline"
                  className="w-full h-10 border-border/50 bg-background/50 hover:bg-background/70"
                  onClick={handleForgotPassword}
                >
                  <KeyRound className="h-4 w-4 mr-2" />
                  Esqueci minha senha
                </Button>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Modal Esqueci Senha */}
      <ForgotPasswordModal
        isOpen={showForgotPasswordModal}
        onClose={closeForgotPasswordModal}
      />
    </div>
  );
}
