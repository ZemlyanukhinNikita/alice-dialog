exports.welcome = () => {
    return {
        response: {
            text: 'Привет!',
            tts: 'Привет, че как?.',
            end_session: false,
            buttons: [
                { title: 'Ну привет!', hide: true },
                { title: 'Как дела?', hide: true },
            ],
        },
    };
};

/**
 * @param {String} command
 */
exports.repeatUserCommand = command => {
    return {
        text: `${command}`,
        end_session: false,
    };
};
