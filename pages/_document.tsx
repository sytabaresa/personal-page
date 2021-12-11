import NextDocument, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

class Document extends NextDocument {

    render() {

        return (
            <Html lang="en">
                <Head />
                <body className="antialiased overflow-hidden bg-base-100 overflow-y-auto">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default Document