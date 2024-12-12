import fs from 'fs/promises';

export async function saveToFile(obj, filePath) {
        const json = JSON.stringify(obj, null, 2);
        await fs.writeFile(filePath, json, 'utf8');
        await console.log(`Object ${json} save to file ${filePath}`);
}


export async function readFromFile(filePath) {
        const data = await fs.readFile(filePath, 'utf8');
        return JSON.parse(data);
}


export const fileExistsAndNotOlderThanHour = async (filePath) => {
    try {
        await fs.access(filePath);
        const stats = await fs.stat(filePath);
        const hourInMs = 60 * 60 * 1000;
        const fileAge = Date.now() - stats.mtimeMs;
        return fileAge <= hourInMs;
    } catch {
        return false;
    }
};