
import { Transform } from 'stream';


/**
 * Returns a Transform stream that strips ANSI escape codes.
 */
export default function stripAnsiStream(): Transform;
