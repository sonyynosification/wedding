import {kv} from "@vercel/kv";
import * as fs from "fs";

const updatePeriod = 3600;



export async function saveWishes({wisher, wishes}) {
    try {
        await kv.set(wisher, wishes);
    } catch (error) {
        console.log(error)
    }
}

// define a function to save list of wishes to a file system
export async function saveWishesToFile(wishes) {
    const fileLocation = "temp/wishes.json";
    try {
        if (!fs.existsSync("temp")) {
            await fs.promises.mkdir("temp");
        }
        await fs.promises.writeFile(fileLocation, JSON.stringify(wishes));
    } catch (error) {
        console.log(error);
    }
}

export async function getWishes() {
    const fileExist = fs.existsSync("temp/wishes.json");
    if (fileExist) {
        try {
            const cachedData = await fs.promises.readFile("temp/wishes.json", "utf8");
            const parsedData = JSON.parse(cachedData);
            const lastUpdated = parsedData.lastUpdated;
            const now = Date.now();
            const timeDiff = (now - lastUpdated) / 1000;
            if (timeDiff < updatePeriod) {
                console.log("Retrieving cached data...");
                return parsedData.list;
            }
        } catch (error) {
            console.log(error);
        }
    }

    console.log("Retrieving new data...")
    // TODO
    return []
    const keys = await kv.keys("*");
    const wishers = keys.filter(k => k !== "user_1_session")
    const values = await kv.mget(wishers[0]);
    const list = wishers.map((k, i) => ({
        wisher: k,
        wishes: values[i],
    }))

    await saveWishesToFile({
        list,
        lastUpdated: Date.now(),
    });
    return list;
}
