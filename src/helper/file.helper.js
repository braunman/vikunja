import fs from 'fs/promises';

export async function saveToFile(obj, filePath) {
        const json = JSON.stringify(obj, null, 2);
        await fs.writeFile(filePath, json, 'utf8');
        console.log(`Object ${json} save to file ${filePath}`);
}


export async function readFromFile(filePath) {
        const data = await fs.readFile(filePath, 'utf8');
        const obj = JSON.parse(data);
        console.log(`Object read from file ${filePath}`);
        return obj;
}


export const fileExists = async (filePath) => {
    try {
        await fs.access(filePath);
        return true;
    } catch {
        return false;
    }
};