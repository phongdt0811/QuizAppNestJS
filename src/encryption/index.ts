export const  encryptAESCTR = async (text: string): Promise<string> => {
    const secretKey = `${process.env.SECRET_KEY}`; 
    const encoder = new TextEncoder();
    const data = encoder.encode(text);
    const key = await crypto.subtle.importKey(
        'raw',
        encoder.encode(secretKey),
        { name: 'AES-CTR', length: 256 },
        false,
        ['encrypt']
    );
    // console.log('key:', key);
    const iv = crypto.getRandomValues(new Uint8Array(16));
    console.log('iv: ', iv);
    const encryptedData = await crypto.subtle.encrypt(
        { name: 'AES-CTR', counter: iv, length: 64 },
        key,
        data
    );
    // console.log('encrypted: ', encryptedData);

    const encryptedArray = new Uint8Array([...iv, ...new Uint8Array(encryptedData)]);
    // console.log('encrypted Array: ', encryptedArray);
    // console.log('string before btoa: ', String.fromCharCode(...encryptedArray));
    // console.log('btoa: ', btoa(String.fromCharCode(...encryptedArray)));

    return btoa(String.fromCharCode(...encryptedArray));
}

export const decryptAESCTR = async (encryptedText: string): Promise<string> => {
    const secretKey = `${process.env.SECRET_KEY}`;
    const decoder = new TextDecoder();
    const encryptedArray = new Uint8Array(atob(encryptedText).split('').map(char => char.charCodeAt(0)));
    const iv = encryptedArray.slice(0, 16);
    const data = encryptedArray.slice(16);

    const key = await crypto.subtle.importKey(
        'raw',
        new TextEncoder().encode(secretKey),
        { name: 'AES-CTR', length: 256 },
        false,
        ['decrypt']
    );

    const decryptedData = await crypto.subtle.decrypt(
        { name: 'AES-CTR', counter: iv, length: 64 },
        key,
        data
    );

    return decoder.decode(decryptedData);
}

export const generateKeyAESCBC = async () => {
    return await crypto.subtle.generateKey(
        // The algorithm is AES in CBC mode, with a key length
        // of 256 bits.
        {
          name: 'AES-CBC',
          length: 256
        },
        // Allow extracting the key material (see below).
        true,
        // Restrict usage of this key to encryption.
        ['encrypt']
      ); 
}
