FROM public.ecr.aws/lambda/nodejs:22

RUN echo ${LAMBDA_TASK_ROOT}

WORKDIR  ${LAMBDA_TASK_ROOT}

COPY package*.json .
RUN npm install

COPY . .

RUN npm run build

RUN cp -r build/* .

CMD ["lambda.handler"]
