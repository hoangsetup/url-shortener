import { Document, Model, Schema, model } from 'mongoose'

interface IUrl {
  url: string;
  shortId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IUrlDocument extends IUrl, Document { }

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IUrlModel extends Model<IUrlDocument> { }

const UrlSchema = new Schema<IUrlDocument, IUrlModel>({
  url: {
    type: String,
    required: true,
    unique: true,
  },
  shortId: {
    type: String,
    required: true,
    unique: true,
  },
}, { timestamps: { createdAt: true, updatedAt: true } });

export default model<IUrlDocument, IUrlModel>('Url', UrlSchema, 'urls');
