// Set map by paarams
//* ------------------------------------------------------------------------------------------ *//

export const useSetMap = () => {
  const { appStore } = useAppStore()
  const { map } = useParams()

  useEffect(() => {
    appStore.findAndSetMap(map)
  }, [])

  return appStore.map
}
