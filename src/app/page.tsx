import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50">
      <Card className="h-[700px] w-[440px]">
        <CardHeader>
          <CardTitle>Chat AI</CardTitle>
          <CardDescription>Using Vercel SDK with OpenAI API</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-3 text-sm text-slate-600">
            <Avatar>
              <AvatarFallback>EN</AvatarFallback>
              <AvatarImage src={"https://github.com/edcnogueira.png"} />
            </Avatar>

            <p className="leading-relaxed">
              <span className="block font-bold text-slate-800">Pessoa:</span>
              qualquer coisa
            </p>
          </div>
        </CardContent>
        <CardFooter className="space-x-2">
          <Input placeholder="Como posso te ajudar?" />
          <Button type="submit">Enviar</Button>
        </CardFooter>
      </Card>
    </div>
  );
}

// https://github.com/seedoshop
