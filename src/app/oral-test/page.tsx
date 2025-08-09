// src/app/oral-test/page.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '口試系統 - 豪神教師管理系統',
  description: '口試題目管理與紀錄',
};

export default function OralTestPage() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #e3f2fd 0%, #f3e5f5 100%)',
      padding: '2rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        background: 'white',
        borderRadius: '1rem',
        padding: '3rem',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        maxWidth: '600px'
      }}>
        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🎯</div>
        <h1 style={{ 
          fontSize: '2rem', 
          fontWeight: '700', 
          color: '#1f2937', 
          marginBottom: '1rem',
          background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          口試系統
        </h1>
        <p style={{ 
          color: '#6b7280', 
          fontSize: '1.125rem', 
          marginBottom: '2rem',
          lineHeight: '1.6'
        }}>
          口試題目管理與紀錄系統正在建置中...
        </p>
        <div style={{
          background: '#f0f9ff',
          border: '1px solid #dbeafe',
          borderRadius: '0.5rem',
          padding: '1rem',
          marginBottom: '2rem'
        }}>
          <h3 style={{ color: '#1e40af', margin: '0 0 0.5rem 0' }}>功能模組</h3>
          <ul style={{ 
            color: '#374151', 
            textAlign: 'left', 
            margin: 0, 
            paddingLeft: '1.5rem' 
          }}>
            <li>題庫管理</li>
            <li>考試安排</li>
            <li>成績紀錄</li>
            <li>統計報表</li>
          </ul>
        </div>
        <button 
          onClick={() => window.history.back()}
          style={{
            background: '#3b82f6',
            color: 'white',
            border: 'none',
            borderRadius: '0.5rem',
            padding: '0.75rem 1.5rem',
            fontSize: '1rem',
            fontWeight: '600',
            cursor: 'pointer'
          }}
        >
          返回上一頁
        </button>
      </div>
    </div>
  );
}

// src/app/business-training/page.tsx
// Create this as a separate file
export const businessTrainingMetadata: Metadata = {
  title: '商務艙訓練 - 豪神教師管理系統',
  description: '商務艙服務訓練系統',
};

export function BusinessTrainingPage() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #e3f2fd 0%, #f3e5f5 100%)',
      padding: '2rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        background: 'white',
        borderRadius: '1rem',
        padding: '3rem',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        maxWidth: '600px'
      }}>
        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>✈️</div>
        <h1 style={{ 
          fontSize: '2rem', 
          fontWeight: '700', 
          color: '#1f2937', 
          marginBottom: '1rem',
          background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          商務艙訓練系統
        </h1>
        <p style={{ 
          color: '#6b7280', 
          fontSize: '1.125rem', 
          marginBottom: '2rem',
          lineHeight: '1.6'
        }}>
          商務艙服務訓練系統已建置完成，等待整合中...
        </p>
        <div style={{
          background: '#f0fdf4',
          border: '1px solid #dcfce7',
          borderRadius: '0.5rem',
          padding: '1rem',
          marginBottom: '2rem'
        }}>
          <h3 style={{ color: '#166534', margin: '0 0 0.5rem 0' }}>系統功能</h3>
          <ul style={{ 
            color: '#374151', 
            textAlign: 'left', 
            margin: 0, 
            paddingLeft: '1.5rem' 
          }}>
            <li>服務流程訓練</li>
            <li>產品知識學習</li>
            <li>實作演練</li>
            <li>評估認證</li>
          </ul>
        </div>
        <button 
          onClick={() => window.history.back()}
          style={{
            background: '#3b82f6',
            color: 'white',
            border: 'none',
            borderRadius: '0.5rem',
            padding: '0.75rem 1.5rem',
            fontSize: '1rem',
            fontWeight: '600',
            cursor: 'pointer'
          }}
        >
          返回上一頁
        </button>
      </div>
    </div>
  );
}