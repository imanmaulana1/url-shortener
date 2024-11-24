import QrCode from 'qrcode';

export default async function generateQrCode(url: string) {
  const qrCode = await QrCode.toDataURL(url, {
    width: 200,
  });
  return qrCode;
}
