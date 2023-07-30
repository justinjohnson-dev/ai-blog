import Posts from '@/components/Posts';
export const revalidate = 0;

export default function Home() {
  return (
    <div className='mx-auto'>
      <p className='mt-12 mb-12 text-3xl text-center dark:text-white'>
        Hello and welcome!
        <span className='whitespace-nowrap'>
          <span className='font-bold'>👋 JJ</span>
        </span>
      </p>
      {/* @ts-expect-error Server Component */}
      <Posts />
    </div>
  );
}
