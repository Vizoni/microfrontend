# microfrontend
TO-DO: Fazer deploy da aplicação na vercel

Blocks: Subir o importmap.production.json em algum cloud para que o arquivo aponte para o /dist/<PACKAGE_NAME>.js.map
Nota: Imagino que tenha que subir cada um dos .js.map de cada package em um cloud, para entao subir esse arquivo (importmap.production) json em algum link publico que possa obter o conteúdo desse importmap que está apontando para as URLs publicas do .js.map de cada /dist de cada pacote.

## Run Local
1. Start root config package on 9000: 
cd /single-spa
npm start -- --port 9000

2. Start header package on 8700: 
cd /react-header
npm start -- --port 8700

3. Start multiples package on 8500: 
cd /react-multiples
npm start -- --port 8500
