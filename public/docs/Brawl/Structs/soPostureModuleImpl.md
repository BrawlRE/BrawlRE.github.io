# THIS FEATURE OF THE DOCUMENTATION IS NOT-YET FINISHED; PLEASE REFRAIN FROM TRYING TO USE IT

###### (it'll be really cool though when it's done I promise)

---

this module appears to be mostly responsible for keeping track of the player model's
position

```struct
Position {
  float xPos
  float yPos
  float zPos
}
```

```struct
soPostureModuleImpl {
  $$8072fa9c
  // takes the position and stores it in the destination
  // @param destination where the position will be stored
  // @param source the source module to get position from
  // @returns nothing; the destination parameter is instead directly modified
  void getPos(Position* destination, soPostureModuleImpl* source)

  $C
  float xPos
  float yPos
  float zPos
  float prevXPos
  float prevYPos
  float prevZPos

  $3C
  float scale
  // right = 1.0, left = -1.0
  float direction

  $5C
  // a pointer to a vector with Rotations
  int* rotation

  $68
  float ownerScale
}
```