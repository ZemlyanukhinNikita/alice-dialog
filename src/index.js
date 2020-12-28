const micro = require('micro');
const dotenv = require('dotenv');
const replies = require('./replies');

dotenv.config();

const server = micro(async (req, res) => {
    const { request, session } = await micro.json(req);
    const response = session.new ? replies.welcome() : replies.repeatUserCommand(request.command);

    return {
        response,
        version: '1.0',
    };
});

const PORT = process.env.PORT;

server.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}, tunnel: http://localhost:4040`));
