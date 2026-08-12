"use client";

import { useCallback, useRef, useState } from "react";
import { UploadCloud, File as FileIcon, X } from "lucide-react";
import { ALLOWED_FILE_TYPES, MAX_FILE_SIZE_BYTES, MAX_TOTAL_ATTACHMENT_BYTES } from "@/lib/validation";

type Dict = {
  dragText: string;
  hint: string;
  examplesLabel: string;
  examples: readonly string[];
  remove: string;
  tooLarge: string;
  badType: string;
  totalTooLarge: string;
};

type Props = {
  files: File[];
  onChange: (files: File[]) => void;
  dict: Dict;
  error?: string | null;
  onError?: (message: string | null) => void;
};

function formatBytes(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export default function FileUpload({ files, onChange, dict, error, onError }: Props) {
  const [dragActive, setDragActive] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const addFiles = useCallback(
    (incoming: FileList | File[]) => {
      onError?.(null);
      const incomingArr = Array.from(incoming);
      const next = [...files];

      for (const file of incomingArr) {
        if (!(ALLOWED_FILE_TYPES as readonly string[]).includes(file.type)) {
          onError?.(dict.badType);
          continue;
        }
        if (file.size > MAX_FILE_SIZE_BYTES) {
          onError?.(dict.tooLarge);
          continue;
        }
        next.push(file);
      }

      const total = next.reduce((sum, f) => sum + f.size, 0);
      if (total > MAX_TOTAL_ATTACHMENT_BYTES) {
        onError?.(dict.totalTooLarge);
        return;
      }

      onChange(next);
    },
    [files, onChange, onError, dict]
  );

  const removeFile = (index: number) => {
    onChange(files.filter((_, i) => i !== index));
  };

  return (
    <div>
      <div
        onDragOver={(e) => {
          e.preventDefault();
          setDragActive(true);
        }}
        onDragLeave={() => setDragActive(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragActive(false);
          if (e.dataTransfer.files?.length) addFiles(e.dataTransfer.files);
        }}
        onClick={() => inputRef.current?.click()}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") inputRef.current?.click();
        }}
        className={`cursor-pointer border-2 border-dashed rounded-sm p-8 text-center transition-colors ${
          dragActive ? "border-[#3E6B8A] bg-[#3E6B8A]/5" : "border-[#1A1D22]/20 hover:border-[#1A1D22]/35"
        }`}
      >
        <UploadCloud className="mx-auto mb-3 text-[#3E6B8A]" size={28} strokeWidth={1.5} />
        <p className="text-sm font-medium">{dict.dragText}</p>
        <p className="text-xs text-[#1A1D22]/50 mt-1">{dict.hint}</p>
        <p className="text-xs text-[#1A1D22]/40 mt-3">
          {dict.examplesLabel} {dict.examples.join(" · ")}
        </p>
        <input
          ref={inputRef}
          type="file"
          multiple
          className="hidden"
          accept=".pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png,.zip"
          onChange={(e) => {
            if (e.target.files?.length) addFiles(e.target.files);
            e.target.value = "";
          }}
        />
      </div>

      {error && <p className="text-xs text-red-600 mt-2">{error}</p>}

      {files.length > 0 && (
        <ul className="mt-4 space-y-2">
          {files.map((file, i) => (
            <li
              key={`${file.name}-${i}`}
              className="flex items-center justify-between border border-[#1A1D22]/12 bg-white px-4 py-2.5 text-sm"
            >
              <span className="flex items-center gap-2 truncate">
                <FileIcon size={16} className="text-[#3E6B8A] shrink-0" />
                <span className="truncate">{file.name}</span>
                <span className="text-[#1A1D22]/40 text-xs shrink-0">{formatBytes(file.size)}</span>
              </span>
              <button
                type="button"
                onClick={() => removeFile(i)}
                aria-label={dict.remove}
                className="text-[#1A1D22]/40 hover:text-red-600 shrink-0"
              >
                <X size={16} />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
