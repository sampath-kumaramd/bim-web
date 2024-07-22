'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

import { Button } from '@/components/ui/button';
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
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
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
  phone: z.string(),
  dob: z.date({
    required_error: 'A date of birth is required.',
  }),
});

function PreRegistrationForm() {
  const params = useParams();
  const lang = params.lang as Languages;
  const dict = useDictionary(lang);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">
            {JSON.stringify(data, null, 2)}
          </code>
        </pre>
      ),
    });
  }

  const [countryCode, setCountryCode] = useState('+880');

  if (!dict) {
    return null;
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
          {dict.preRegister.content.title}
        </Typography>

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                {dict?.preRegister.form.name.label}
              </FormLabel>
              <FormControl>
                <Input
                  placeholder={
                    dict?.preRegister.form.name.placeholder
                  }
                  {...field}
                />
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
              <FormLabel>
                {dict?.preRegister.form.email.label}
              </FormLabel>
              <FormControl>
                <Input
                  placeholder={
                    dict?.preRegister.form.email.placeholder
                  }
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                {dict?.preRegister.form.phone.label}
              </FormLabel>
              <FormControl>
                <div className="flex items-center rounded-xl border border-gray-200">
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select a country code" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>
                          <>
                            {
                              dict?.preRegister.form.phone
                                .countryCode
                            }
                          </>
                        </SelectLabel>
                        <SelectItem
                          value="apple"
                          className="flex items-center"
                        >
                          <div></div>
                          <div>+2</div>
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <Input
                    placeholder={
                      dict?.preRegister.form.phone
                        .placeholder
                    }
                    {...field}
                    className="border-none"
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="dob"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>
                {dict?.preRegister.form.dob.label}
              </FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={'outline'}
                      className={cn(
                        'w-auto pl-3 text-left font-normal',
                        !field.value &&
                          'text-muted-foreground',
                      )}
                    >
                      {field.value ? (
                        format(field.value, 'PPP')
                      ) : (
                        <span>
                          {
                            dict?.preRegister.form.dob
                              .placeholder
                          }
                        </span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent
                  className="w-auto p-0"
                  align="start"
                >
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() ||
                      date < new Date('1900-01-01')
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex w-full flex-col items-center pt-4 sm:pt-8">
          <CustomButton
            variant="tertiary"
            className="w-2/3 bg-[#d10062] py-3 text-white"
            text={dict?.preRegister.form.submit || 'Submit'}
          />
        </div>
      </form>
    </Form>
  );
}

export default PreRegistrationForm;
