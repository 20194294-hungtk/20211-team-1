import { updateArticles } from "../../services/User/HomeServices";
import { convertTime } from "../utils/convertTime";

export default function MainNewsV3({ data, reload }) {
    const { thumbnail, link, title, source, releaseTime, _id, numOfViews } = data;
    return (
        <div>
            <div className='overflow-hidden'>
                <a href={link} target="_blank" onClick={
                    async () => {
                        await updateArticles(_id, { numOfViews: (numOfViews + 1) })
                        reload();
                    }
                }>
                    <img src={thumbnail} alt="" className='h-40 mb:h-48 md:max-h-mi-5 w-full md:h-i-5 lg:object-cover rounded' />
                </a>

                <div>
                    <div className='flex gap-1 mt-1 items-end'>
                        <img src={source.logo} alt="" className='max-h-4 object-fill' />
                        <span className='text-xs font-medium font-text text-gray-400'>{convertTime(Date.now() - releaseTime)}</span>
                    </div>
                    <span className='text-xl sm:text-lg font-semibold font-text hover:text-blue-400'>
                        <a href={link} target="_blank" onClick={
                    async () => {
                        await updateArticles(_id, { numOfViews: (numOfViews + 1) })
                        reload();
                    }
                }>{title}</a>
                    </span>

                </div>
            </div>
        </div>
    )
}