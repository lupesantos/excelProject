import dynamic from "next/dynamic";
import Loading from '@/components/loading';
import Container from '@/components/common/container';
Container
import Wrapper from '@/components/common/wrapper';
import BoxWrapper from '@/components/common/boxWrapper';
import MappedItemList from '@/components/itemList/mappedItemList';
import AddTodo from '@/components/AddTodo';
import { fetchTodos } from "@/lib/todos";

const DynamicContainer = dynamic(
  () => import("../components/common/container"),
  {
    ssr: false,
    loading: () => <Loading />,
  }
);

export const revalidate = 0;

export default async function Home() {
  const data = await fetchTodos()
  return (
    <main className="mx-auto flex w-90% justify-center">
      <DynamicContainer>
        {/* @ts-expect-error Server Component */}
        <BoxWrapper element={<MappedItemList list={data}/>} title='Todo List' type='main'/>
        <Wrapper>
          <AddTodo/>
        </Wrapper>
      </DynamicContainer>
    </main>
  )
}
