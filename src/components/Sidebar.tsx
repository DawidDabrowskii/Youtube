import {
  mainLinks,
  secondaryLinks,
  subscriptionLinks,
  helpLinks,
  textLinks,
} from '../constants/constants';

const Sidebar = () => {
  return (
    <aside className='w-2/12 bg-[#212121] pr-5 overflow-auto pb-8'>
      <ul className='flex flex-col border-b-2 border-gray-700'>
        {mainLinks.map(({ icon, name }) => (
          <li
            key={name}
            className={`pl-6 py-3 hover:bg-zinc-600 ${
              name === 'Home' ? 'bg-slate-600' : ''
            }`}>
            <a href='#' className='flex items-center gap-5'>
              {icon}
              <span className='text-sm tracking-wider'>{name}</span>
            </a>
          </li>
        ))}
      </ul>
      <ul className='flex flex-col border-b-2 border-gray-700'>
        {secondaryLinks.map(({ icon, name }) => (
          <li key={name} className={`pl-6 py-3 hover:bg-zinc-600 `}>
            <a href='#' className='flex items-center gap-5'>
              {icon}
              <span className='text-sm tracking-wider'>{name}</span>
            </a>
          </li>
        ))}
      </ul>
      <ul className='flex flex-col border-b-2 border-gray-700'>
        {subscriptionLinks.map(({ icon, name }) => (
          <li key={name} className={`pl-6 py-3 hover:bg-zinc-600 `}>
            <a href='#' className='flex items-center gap-5'>
              {icon}
              <span className='text-sm tracking-wider'>{name}</span>
            </a>
          </li>
        ))}
      </ul>
      <ul className='flex flex-col border-b-2 border-gray-700'>
        {helpLinks.map(({ icon, name }) => (
          <li key={name} className={`pl-6 py-3 hover:bg-zinc-600 `}>
            <a href='#' className='flex items-center gap-5'>
              {icon}
              <span className='text-sm tracking-wider'>{name}</span>
            </a>
          </li>
        ))}
      </ul>
      <ul className='flex gap-2 flex-wrap text-sm p-4 text-zinc-400'>
        {textLinks[0].map(name => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <ul className='flex gap-2 flex-wrap text-sm p-4 text-zinc-400'>
        {textLinks[1].map(name => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <span className='px-4 text-sm text-zinc-400'>&copy; 2023 Google</span>
    </aside>
  );
};

export default Sidebar;
