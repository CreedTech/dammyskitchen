const LoadingOverlay = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="w-12 h-12 border-4 border-t-transparent border-red-500 rounded-full animate-spin"></div>
    </div>
  );
};

export default LoadingOverlay;
