type UserType = {
  email: string;
  password: string;
};

type RegisterUserType = {
  name: string;
} & UserType;

type DefaultErrorHandlerParams = {
  message?: string;
  errors?: [];
  code?: number;
};

type AxiosErrorResponse = {
  request: {
    status: number;
  };
  response: {
    data: {
      body: {
        errors: [];
      } & string;
    };
  };
};

export type {
  RegisterUserType,
  AxiosErrorResponse,
  UserType,
  DefaultErrorHandlerParams,
};
