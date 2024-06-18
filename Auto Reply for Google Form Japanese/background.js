chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.eventName === 'pushedActiveAutoReply') {

        const user = {
            name: 'sample',
            email: 'sample@example.com',
            paid: true
        };

        sendResponse(user);
        return true;
    } else if (message.eventName === 'paidUser') {

        const emails = [
            'first@example.com',
            'second@exaple.com',
            'third@example.com'
        ];

        const quetions = [
            'firstQuestion',
            'secondQuestion',
            'thirdQuestion'
        ];

        const emailsAndQuestions = {
            Emails: emails,
            Questions: quetions
        };
        sendResponse(emailsAndQuestions);
        return true;
    }
})