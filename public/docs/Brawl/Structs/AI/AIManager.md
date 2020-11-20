
located at address: `0x80B8A2D8`

```struct
AiManager {
  char* namePtr

  $F8
  AiStat[0xf]* aiStatArr
  AiWeaponManager* aiWeaponManagerPtr
  AiEnemyManager* aiEnemyManagerPtr

  $134
  data* aiCommonCEPtr
  data* miscData0Ptr
  data* miscData1Ptr

  $144
  data* aiCommonPtr

  $348
  BrawlArray<data>* aiClJointListArr
  BrawlArray<data>* aiClBlockArr

  $388
}
```