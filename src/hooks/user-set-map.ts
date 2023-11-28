// Set map by paarams
//* ------------------------------------------------------------------------------------------ *//

export function useSetMap() {
  const { appStore } = useAppStore()
  const { map } = useParams()

  useEffect(() => {
    appStore.findAndSetMap(map)
  }, [])

  return appStore.map
}
