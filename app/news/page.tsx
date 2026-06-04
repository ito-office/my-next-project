import NewsList from "../_components/NewList/NewList";
import { getNewsList } from "../_libs/microcms";


export default async function Page() {
    const {contents: news} =await getNewsList();

    return <NewsList news={news} />;
}