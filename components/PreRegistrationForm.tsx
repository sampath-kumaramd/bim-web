'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { format } from 'date-fns';
import { CalendarIcon, Flag } from 'lucide-react';

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
import { Languages } from '@/lib/types/languages';
import { useDictionary } from '@/hooks/useDictionary';
import { Checkbox } from './ui/checkbox';

import { GB } from './ui/flags/GB';
import { FR } from './ui/flags/FR';
import { LU } from './ui/flags/LU';
import { IT } from './ui/flags/IT';
import { ES } from './ui/flags/ES';
import { DE } from './ui/flags/DE';

const FormSchema = z.object({
  name: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Invalid email address.',
  }),
  phone: z.string({
    required_error: 'A phone number is required.',
  }),
  dob: z.date({
    required_error: 'A date of birth is required.',
  }),
  TOC: z.boolean({
    required_error:
      'You must accept the terms and conditions.',
  }),
});

function PreRegistrationForm() {
  const params = useParams();
  const lang = params.lang as Languages;
  const dict = useDictionary(lang);
  const [countryCode, setCountryCode] = useState('+880');
  const countryCodes = [
    { value: '+44', label: 'United Kingdom', flag: GB },
    { value: '+33', label: 'France', flag: FR },
    { value: '+352', label: 'Luxembourg', flag: LU },
    { value: '+39', label: 'Italy', flag: IT },
    { value: '+34', label: 'Spain', flag: ES },
    { value: '+49', label: 'Germany', flag: DE },
  ];

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      dob: undefined,
      TOC: false,
    },
  });

  async function onSubmit(
    data: z.infer<typeof FormSchema>,
  ) {
    let phoneNumber = `${countryCode}${data.phone}`;
    data.phone = phoneNumber;

    if (data.TOC === false) {
      toast({
        title: 'You must accept the terms and conditions.',
        description:
          'Please accept the terms and conditions.',
        variant: 'destructive',
      });
      return;
    }

    if (data.phone.length < 10) {
      toast({
        title: 'Invalid Phone Number',
        description: 'Please enter a valid phone number.',
        variant: 'destructive',
      });
      return;
    }

    try {
      const response = await fetch('/api/pre-register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
        }),
      });

      if (!response.ok) {
        throw new Error(
          'Failed to submit pre-registration',
        );
      }

      toast({
        title:
          dict?.preRegister.form.submitToast.success.title,
        description:
          dict?.preRegister.form.submitToast.success
            .description,
      });

      form.reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title:
          dict?.preRegister.form.submitToast.error.title,
        description:
          dict?.preRegister.form.submitToast.error
            .description,
        variant: 'destructive',
      });
    }
  }

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
                <Typography
                  variant="Bim4Regular"
                  className="text-start font-thin"
                >
                  {dict?.preRegister.form.name.label}
                </Typography>
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
                <Typography
                  variant="Bim4Regular"
                  className="text-start font-thin"
                >
                  {dict?.preRegister.form.email.label}
                </Typography>
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
              <Typography
                variant="Bim4Regular"
                className="text-start font-thin"
              >
                {dict?.preRegister.form.phone.label}
              </Typography>
              <FormControl>
                <div className="flex">
                  <Select
                    value={countryCode}
                    onValueChange={(value) =>
                      setCountryCode(value)
                    }
                    defaultValue={countryCode}
                  >
                    <SelectTrigger className="w-[120px] focus:ring-0 focus:ring-offset-0">
                      <SelectValue placeholder="code">
                        {countryCodes.find(
                          (code) =>
                            code.value === countryCode,
                        )?.flag ? (
                          <div className="flex items-center">
                            {React.createElement(
                              countryCodes.find(
                                (code) =>
                                  code.value ===
                                  countryCode,
                              )!.flag,
                              { className: 'h-4 w-4 mr-2' },
                            )}
                            {countryCode}
                          </div>
                        ) : (
                          <div className="flex gap-2">
                            <FR className="mr-2 h-4 w-4" />
                            +33
                          </div>
                        )}
                      </SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                      {countryCodes.map(
                        ({ value, label, flag: Flag }) => (
                          <SelectItem
                            key={value}
                            value={value}
                            className="flex items-center"
                          >
                            <div className="flex gap-2">
                              <Flag className="mr-2 h-4 w-4" />
                              <div>({value})</div>
                            </div>
                          </SelectItem>
                        ),
                      )}
                    </SelectContent>
                  </Select>
                  <Input
                    className="flex-1"
                    placeholder={
                      dict?.preRegister.form.phone
                        .placeholder
                    }
                    {...field}
                    onChange={(e) => {
                      const phoneNumber = e.target.value;
                      field.onChange(`${phoneNumber}`);
                    }}
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
              <Typography
                variant="Bim4Regular"
                className="text-start font-thin"
              >
                {dict?.preRegister.form.dob.label}
              </Typography>
              <FormLabel></FormLabel>
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
                      date >
                        new Date(
                          new Date().setFullYear(
                            new Date().getFullYear() - 18,
                          ),
                        )
                    }
                    initialFocus
                    fromYear={1900}
                    toYear={new Date().getFullYear() - 18}
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="TOC"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md p-4">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel className="flex items-center">
                  <Typography
                    variant="Bim4Regular"
                    className="font-thin"
                  >
                    {dict?.preRegister.form.TOS.label}
                  </Typography>
                  <Typography
                    variant="Bim4Regular"
                    className="font-semibold text-pink"
                  >
                    &nbsp; {dict?.preRegister.form.TOS.link}
                  </Typography>
                </FormLabel>
              </div>
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
