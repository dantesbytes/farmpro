import 'dotenv/config';
import { Langbase } from 'langbase';
import {readFile} from 'fs/promises';
import path from 'path'

const langbase = new Langbase({
    apiKey: process.env.LANGBASE_API_KEY!,

})

async function main()