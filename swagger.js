const swaggerAutogen = require('swagger-autogen')()

const doc = {
        info: {
            title: "Blog API",
            version: "1.0.0",
            description:
                "A Express Library APIs"
        },
        host:"localhost:3000",
        schema:["http"],
}

const outputFile = './swagger_output.json'
const endpointsFiles = ['./routes/userRoute.js', './routes/postRoute.js', './routes/authRoute.js', './routes/categoryRoute.js', './routes/uploadRoute.js']

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require('./server.js')
})