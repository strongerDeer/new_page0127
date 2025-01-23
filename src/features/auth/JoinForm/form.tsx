'use client';
import { useId, useState } from 'react';
import Agreement from './Agreement';

export function Form() {
  const [checked, setChecked] = useState(false);
  const headingId = useId(); // 클라이언트와 서버에서 안정적인 고유 ID를 생성

  return (
    <form aria-labelledby={headingId}>
      <h2 id={headingId}>회원 가입</h2>
      <label htmlFor="displayName">닉네임</label>
      <input id="displayName" type="text" placeholder="test123" />

      <label htmlFor="password">비밀번호</label>
      <input id="password" type="password" placeholder="8자 이상" />

      <Agreement
        onChange={(e) => {
          setChecked(e.currentTarget.checked);
        }}
      />
      <button type="submit" disabled={!checked}>
        회원가입
      </button>
    </form>
  );
}
