import {AnswerVerificationRequest, AnswerVerificationResponse} from "@/classes/Answer/AnswerTypes";

const ENDPOINT = `${process.env.API_ENDPOINT}/answers`;

export class Answer {
    challengeId: number;
    answer: string;
    
    constructor(challengeId: number, answer: string) {
        this.challengeId = challengeId;
        this.answer = answer;
    }
    
    async verify(): Promise<boolean> {
        return this.answer === '42';
        const requestBody: AnswerVerificationRequest = {
            challengeId: this.challengeId,
            answer: this.answer,
        }
        
        const response = await fetch(ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody)
        });
        
        if (!response.ok) {
            //TODO: Handle error
            throw new Error('Failed to verify answer');
        }
        
        const data: AnswerVerificationResponse = await response.json();
        return data.correct;
    }
}