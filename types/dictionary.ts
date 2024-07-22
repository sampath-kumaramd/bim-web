export interface Dictionary {
  about: {
    hero: {
      title: string;
      description: string;
      primaryButton: string;
      secondaryButton: string;
    };
    aboutUs: {
      title: string;
      startingWord: string;
      description: string;
      button: string;
    };
    ourConcept: {
      title: string;
      description: string;
      button: string;
    };
    getStarted: {
      title: string;
      description: string;
      button: string;
    };
  };
  contact: {
    hero: {
      title: string;
      description: string;
    };
    form: {
      title: string;
      name: {
        label: string;
        placeholder: string;
      };
      email: {
        label: string;
        placeholder: string;
      };
      message: {
        label: string;
        placeholder: string;
      };
      submit: string;
      toast: {
        success: {
          title: string;
          description: string;
        };
        error: {
          title: string;
          description: string;
        };
      };
      validation: {
        name: string;
        email: string;
        message: {
          required: string;
          maxLength: string;
        };
      };
    };
  };
  legal: {
    hero: {
      title: string;
      description: string;
    };
    legalNotice: {
      title: string;
      description: string;
      acceptanceText: string;
    };
  };
  news: {
    hero: {
      title: string;
      description: string;
    };
    section1: {
      title: string;
      startingWord: string;
      description: string;
      button: string;
    };
    section2: {
      title: string;
      startingWord: string;
      description: string;
      button: string;
    };
  };
  preRegister: {
    hero: {
      title: string;
      description: string;
    };
    content: {
      title: string;
      description: string;
    };
    form: {
      title: string;
      name: {
        label: string;
        placeholder: string;
      };
      email: {
        label: string;
        placeholder: string;
      };
      phone: {
        label: string;
        placeholder: string;
        countryCode: {
          placeholder: string;
          label: string;
        };
      };
      dob: {
        label: string;
        placeholder: string;
      };
      submit: string;
      toast: {
        title: string;
      };
      validation: {
        name: string;
        email: string;
        dob: string;
      };
    };
  };
}
