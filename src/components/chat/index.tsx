"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useChat } from "ai/react";
import { ScrollArea } from "@/components/ui/scroll-area";

export function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/chat",
  });

  return (
    <Card className="w-[540px]">
      <CardHeader>
        <CardTitle>Chat AI</CardTitle>
        <CardDescription>Using Vercel SDK with OpenAI API</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[640px] w-full space-y-4 pb-2 pr-4">
          {messages.map(message => {
            return (
              <div key={message.id} className="mb-2 flex gap-3 text-sm text-slate-600">
                {message.role === "user" && (
                  <Avatar>
                    <AvatarFallback>EN</AvatarFallback>
                    <AvatarImage src={"https://github.com/edcnogueira.png"} />
                  </Avatar>
                )}

                {message.role === "assistant" && (
                  <Avatar>
                    <AvatarFallback>SD</AvatarFallback>
                    <AvatarImage
                      src={
                        "https://static.vecteezy.com/ti/vetor-gratis/t2/4996790-robot-chatbot-icon-sign-gratis-vetor.jpg"
                      }
                    />
                  </Avatar>
                )}

                <p className="leading-relaxed">
                  <span className="block font-bold text-slate-800">
                    {message.role === "user" ? "Usuário" : "Seedo-bot"}:
                  </span>
                  {message.content}
                </p>
              </div>
            );
          })}
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <form onSubmit={handleSubmit} className="flex w-full gap-2">
          <Input
            placeholder="Como posso te ajudar?"
            value={input}
            onChange={handleInputChange}
          />
          <Button type="submit">Enviar</Button>
        </form>
      </CardFooter>
    </Card>
  );
}
