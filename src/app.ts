import './dirESM.ts';
import Fastify from 'fastify';
import { serializerCompiler, validatorCompiler, ZodTypeProvider } from "fastify-type-provider-zod";

const app = Fastify({
    //logger: true,
}).withTypeProvider<ZodTypeProvider>();

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.get('/check', () => {
    return { hello: 'world' };
});

if (process.env.AWS_LAMBDA_FUNCTION_NAME === undefined) {
    const port = 3000;
    await app.listen({ port });
    console.info(`Server listening on port ${port}`);
}

export default app;
