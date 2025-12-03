import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Plus } from "lucide-react";
import { holdingSchema, type HoldingSchema } from "@/schema/holding.schema";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  Button,
  Input,
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/ui";
import { useState } from "react";

export const AddHoldingButton = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const form = useForm<HoldingSchema>({
    resolver: zodResolver(holdingSchema),
    defaultValues: {
      name: "",
      description: "",
      stable: 0,
      growth: 0,
      category: "stocks",
    },
  });

  const onSubmit = (values: HoldingSchema) => {
    console.table(values);
    alert("제출 완료");
  };

  return (
    <Dialog
      open={isDialogOpen}
      onOpenChange={(open) => {
        if (!open) {
          setIsDialogOpen(false);
          form.reset();
        }
      }}
    >
      <DialogTrigger asChild>
        <Button
          onClick={() => setIsDialogOpen(true)}
          className="ml-auto flex gap-1"
        >
          <span>추가하기</span>
          <Plus size={16} />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>포트폴리오 항목 추가</DialogTitle>
          <DialogDescription>
            새로운 항목에 대한 정보를 입력해 주세요.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            className="flex flex-col gap-5 py-5"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>자산명</FormLabel>
                  <FormControl>
                    <Input placeholder="한국 주식" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>설명</FormLabel>
                  <FormControl>
                    <Input placeholder="(KODEX 200)" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="stable"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>안정형(%)</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="growth"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>성장형(%)</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button type="button" variant="outline">
                취소
              </Button>
              <Button type="submit">저장</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
