import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/constellations")({
  component: ConstellationsLayout,
});

function ConstellationsLayout() {
  return <Outlet />;
}
