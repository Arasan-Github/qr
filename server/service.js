const QRCode = require('qrcode');

exports.formData = (data) => {
    const qrCodeText = `Product ID: ${data.id}, price: Rs.${data.price}`
}

exports.generateQRCode = async (qrCodeText) => {
    const options = {
        errorCorrectionLevel: 'M',
        type: 'image/png',
        margin: 1
    };

    const qrCodeBuffer = await QRCode.toBuffer(qrCodeText, options);
    return qrCodeBuffer;
}