import { Badge } from "@/components/ui/badge"

export function MetaGrid(props: { items: { label: string, value: string, badge?: boolean }[] }) {
  const { items } = props
  if (!items.length) return null
  return (
    <div className="space-y-6">
      {items.map((it) => (
        <div key={it.label} className="space-y-2">
          <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{it.label}</div>
          {it.badge ? (
            <Badge variant="secondary" className="rounded-[8px]">{it.value}</Badge>
          ) : (
            <div className="text-sm text-foreground">{it.value}</div>
          )}
        </div>
      ))}
    </div>
  )
}
