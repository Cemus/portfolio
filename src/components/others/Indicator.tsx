export default function Indicator({ isVisible }: { isVisible: boolean }) {
  if (!isVisible) return null;
  return <span className="bg-mBrand w-4 h-4 rounded-full animate-pop"></span>;
}
