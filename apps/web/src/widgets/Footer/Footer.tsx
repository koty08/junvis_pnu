export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <img 
            src="/junvis_logo.png" 
            alt="Junvis Logo" 
            className="w-6 h-6 rounded"
          />
          <span className="text-lg font-semibold text-gray-900 dark:text-white">준비스</span>
        </div>
        <p className="text-gray-600 dark:text-gray-400">
          부산대학교 학생을 위한 스마트 캠퍼스 라이프 비서
        </p>
      </div>
    </footer>
  )
}