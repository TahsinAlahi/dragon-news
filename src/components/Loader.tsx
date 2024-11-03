function Loader({ className = "" }: { className?: string }) {
  return (
    <div
      className={`h-full w-full flex items-center justify-center ${className}`}
    >
      <div className="loader" />
    </div>
  );
}

export default Loader;
