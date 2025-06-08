import MyListDate from './MyListData.json';
import MyListItem from './MyListItem';

export default function MyList() {
    const tags = MyListDate.map((item, idx) => {
        return (
            <MyListItem title={item.title} content={item.content} key={idx} />
        )
    })
  return (
    <div className='w-10/12 grid grid-cols-2 gap-4'>
        {tags}
    </div>
  )
}
