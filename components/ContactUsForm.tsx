'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';
import { Textarea } from '@/components/ui/textarea';

import { Typography } from './Typography';
import CustomButton from './CustomButton';
import { useParams } from 'next/navigation';
import { Languages } from '@/types/languages';
import { useDictionary } from '@/hooks/useDictionary';

const FormSchema = z.object({
  name: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Invalid email address.',
  }),
  message: z
    .string()
    .min(3, 'Message is required.')
    .max(250, {
      message: 'Message must be at maximum 250 characters.',
    }),
});

function ContactUsForm() {
      const params = useParams();
  const lang = params.lang as Languages; 
  const dict = useDictionary(lang);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  async function onSubmit(
    data: z.infer<typeof FormSchema>,
  ) {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      toast({
        title: dict?.contact.form.toast.success.title,
        description: dict?.contact.form.toast.success.description,
      });

      form.reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: dict?.contact.form.toast.error.title,
        description:
          dict?.contact.form.toast.error.description,
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-auto space-y-6"
      >
        <Typography
          variant="Bim1"
          className="mb-8 text-center text-xl text-[#D10062] sm:text-3xl"
        >
          {dict?.contact.form.title}
        </Typography>

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{dict?.contact.form.name.label}</FormLabel>
              <FormControl>
                <Input placeholder= {dict?.contact.form.name.placeholder} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{dict?.contact.form.email.label}</FormLabel>
              <FormControl>
                <Input
                  placeholder= {dict?.contact.form.email.placeholder}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{dict?.contact.form.message.label}</FormLabel>
              <Textarea
                placeholder= {dict?.contact.form.message.placeholder}
                id="message"
                {...field}
              />
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex w-full flex-col items-center pt-4 sm:pt-8">
          <CustomButton
            variant="tertiary"
            className="w-2/3 bg-[#d10062] py-3 text-white"
            text={dict?.contact.form.submit || 'Submit'}
            disabled={isSubmitting}
          />
        </div>
      </form>
    </Form>
  );
}

export default ContactUsForm;
