import html from 'bun-plugin-html';

try {
    const result = await Bun.build({
        entrypoints: ['./src/index.html'],
        outdir: './dist',
        plugins: [
            html()
        ],
    });

    if (!result.success) {
        console.error("Build failed");
        for (const message of result.logs) {
            // Bun will pretty print the message object
            console.error(message);
        }
    }
} catch (e) {
    console.error(e);
}
