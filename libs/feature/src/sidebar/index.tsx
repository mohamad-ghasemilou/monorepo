import {SidebarUI} from "@monorepo/ui";
import {useQuery} from "@tanstack/react-query";
import {CategoryService} from "@monorepo/data-access";
import {useDispatch} from "react-redux";
import {setSelected} from '@monorepo/data-access'
import {Category} from "@monorepo/feature";

export function Sidebar() {
  const dispatch = useDispatch();

  const {isLoading, error, data} = useQuery({
    queryKey: ['allCategories'],
    queryFn: () => CategoryService.getAll(),
  })

  function handleClick(category:Category) {
    dispatch(setSelected(category));
  }

  if (isLoading) return <span>loading categories</span> //todo: use skeleton

  return (
    <SidebarUI items={data} onItemClick={handleClick} />
  )
}
