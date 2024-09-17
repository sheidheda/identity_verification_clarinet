(define-map Identities principal (string-ascii 50))
(define-map Verifications principal bool)

(define-constant contract-owner tx-sender)
(define-constant err-not-owner (err u100))
(define-constant err-already-registered (err u101))
(define-constant err-not-registered (err u102))

;; Register a new identity
(define-public (register-identity (name (string-ascii 50)))
  (let ((sender tx-sender))
    (if (is-some (map-get? Identities sender))
      err-already-registered
      (begin
        (map-set Identities sender name)
        (map-set Verifications sender false)
        (ok true)))))

;; Verify an identity (only contract owner can do this)
(define-public (verify-identity (user principal))
  (if (is-eq tx-sender contract-owner)
    (if (is-some (map-get? Identities user))
      (begin
        (map-set Verifications user true)
        (ok true))
      err-not-registered)
    err-not-owner))

;; Check if an identity is verified
(define-read-only (is-verified (user principal))
  (default-to false (map-get? Verifications user)))

;; Get the name associated with an identity
(define-read-only (get-identity (user principal))
  (map-get? Identities user))
