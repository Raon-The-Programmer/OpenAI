import {OpenAI} from 'openai';

const openai = new OpenAI({apiKey:"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", dangerouslyAllowBrowser: true })

export async function sendMsg(message){
    const res = await openai.completions.create({
        model:'gpt-3.5-turbo-instruct',
        prompt:message,
        temperature:0.7,
        max_tokens:256,
        top_p:1,
        frequency_penalty:0,
        presence_penalty:0,
    })
    return res.choices[0].text;
}